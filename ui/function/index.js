// // index.js

// console.log("make by marcinlowercase");
// // value
// let min_element_size = 0;
// let client_device_corner_radius = 0;

// // element
// const oo1 = document.getElementById("oo1");
// const marcinlowercase = document.getElementById("marcinlowercase");

// // function
// window.render = (client_device_corner_radius) => {
//   oo1.style.borderRadius = `${border_radius_for_layer(1, client_device_corner_radius)}px`;
//   marcinlowercase.style.borderRadius = `${border_radius_for_layer(1, client_device_corner_radius)}px`;
//   setup_by_drag(client_device_corner_radius * 2);
//   console.log("render with corner radius:", client_device_corner_radius);
// };

// window.addEventListener("load", () => {
//   if (typeof window.deviceCornerRadius !== "undefined") {
//     window.render(window.deviceCornerRadius);
//   } else {
//     window.render(0);
//   }
// });

// const border_radius_for_layer = (layer, client_device_corner_radius) => {
//   if (layer == 0) {
//     return client_device_corner_radius;
//   }
//   return Math.max(
//     0,
//     border_radius_for_layer(layer - 1, client_device_corner_radius) - 8,
//   );
// };

// const setup_by_drag = (min_element_size) => {
//   console.log("setup_by_drag");
//   const handle = document.getElementById("by");
//   const container = document.getElementById("oo1_container");

//   const startDrag = (e) => {
//     e.preventDefault();
//     const direction = getComputedStyle(container).flexDirection;

//     const drag = (moveEvent) => {
//       moveEvent.preventDefault();

//       const containerRect = container.getBoundingClientRect();

//       let handle_size = 0;
//       let available_space = 0;
//       let first_size = 0;
//       let second_size = 0;

//       if (direction === "row") {
//         handle_size = handle.offsetWidth;
//         available_space = containerRect.width - handle_size;
//         const client_x = moveEvent.clientX ?? moveEvent.touches[0].clientX;
//         first_size = client_x - containerRect.left;
//       } else {
//         handle_size = handle.offsetHeight;
//         available_space = containerRect.height - handle_size;
//         const client_y = moveEvent.clientY ?? moveEvent.touches[0].clientY;
//         first_size = client_y - containerRect.top;
//       }

//       if (first_size < min_element_size) first_size = min_element_size;
//       if (first_size > available_space - min_element_size)
//         first_size = available_space - min_element_size;

//       second_size = available_space - first_size;

//       oo1.style.flex = `0 1 ${first_size}px`;
//       marcinlowercase.style.flex = `0 1 ${second_size}px`;

//       document.body.style.userSelect = "none";
//     };

//     const endDrag = () => {
//       document.removeEventListener("mousemove", drag);
//       document.removeEventListener("touchmove", drag);
//       document.removeEventListener("mouseup", endDrag);
//       document.removeEventListener("touchend", endDrag);

//       document.body.style.userSelect = "";
//       document.body.style.cursor = "";
//     };

//     document.addEventListener("mousemove", drag);
//     document.addEventListener("mouseup", endDrag);

//     document.addEventListener("touchmove", drag, { passive: false });
//     document.addEventListener("touchend", endDrag);
//   };

//   handle.addEventListener("mousedown", startDrag);
//   handle.addEventListener("touchstart", startDrag);
// };

// // event listener
