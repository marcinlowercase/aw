//server.js
import { join } from "https://deno.land/std@0.211.0/path/mod.ts";
import { serveDir } from "https://deno.land/std@0.211.0/http/file_server.ts";
import { contentType } from "https://deno.land/std@0.211.0/media_types/mod.ts";

const ui_directory = "ui";

const index_response = async (file_path, request) => {
  let file_content = await Deno.readTextFile(file_path);
  const file_extension = file_path.split(".").pop();

  const response_headers = new Headers({
    "content-type": contentType(`.${file_extension}`) ||
      "application/octet-stream",
  });

  return new Response(file_content, {
    status: 200,
    headers: response_headers,
  });
};

const handle_request = async (request) => {
  const url = new URL(request.url);
  const path_name = url.pathname;

  try {
    let file_path = "";
    switch (path_name) {
      case "/":
        file_path = join(Deno.cwd(), ui_directory, "index.html");
        return await index_response(file_path, request);

      case "/privacy-policy":
        file_path = join(Deno.cwd(), ui_directory, "privacy_policy.html");
        return await index_response(file_path, request);

      default:
        return serveDir(request, {
          fsRoot: ui_directory,
        });
    }
  } catch (error) {
    console.warn(`File not found: ${path_name}`);
    return new Response("Not Found", { status: 404 });
  }
};

Deno.serve(handle_request);
