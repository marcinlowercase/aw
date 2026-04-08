// server.js
import { serveDir } from "https://deno.land/std@0.211.0/http/file_server.ts";

const ui_directory = "ui";

Deno.serve(async (request) => {
  const url = new URL(request.url);

  // 1. Redirect testers to your Google Group for Closed Testing
  if (url.pathname === "/download" || url.pathname === "/join") {
    // Replace this with your actual Google Group URL
    const googleGroupUrl = "https://groups.google.com/g/YOUR_GROUP_NAME";
    return Response.redirect(googleGroupUrl, 302);
  }

  // 2. Handle Clean URLs (e.g., /privacy-policy -> privacy_policy.html)
  if (url.pathname === "/privacy-policy") {
    url.pathname = "/privacy_policy.html";
    return serveDir(new Request(url.href, request), { fsRoot: ui_directory });
  }

  // 3. Handle Clean URL for Account Deletion (e.g., /delete-account -> delete_account.html)
  if (url.pathname === "/delete-account") {
    url.pathname = "/delete_account.html";
    return serveDir(new Request(url.href, request), { fsRoot: ui_directory });
  }

  // 4. Serve EVERYTHING else (index.html, CSS, JS, fonts, SVG)
  // Automatically handles Content-Types, caching, and 404s
  return serveDir(request, {
    fsRoot: ui_directory,
    showIndex: true,
  });
});
