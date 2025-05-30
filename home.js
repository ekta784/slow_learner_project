// // Function to load HTML into a div with a given ID
// function loadHTMLIntoDiv(divId, htmlFilePath) {
//     const div = document.getElementById(divId);
//     if (!div) {
//         console.error(`Element with ID ${divId} not found.`);
//         return;
//     }

//     // Create a new XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Set up a callback function to handle the response
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // Replace the content of the div with the loaded HTML
//             div.innerHTML = xhr.responseText;
//         }
//     };

//     // Open the request to the HTML file
//     xhr.open("GET", htmlFilePath, true);

//     // Send the request
//     xhr.send();
// }

// // Usage: Load "example.html" into the "test" div
// loadHTMLIntoDiv("test", "./test/test.html");
