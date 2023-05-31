const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
function generateNewFileName(originalName) {
    // var ss="shubham";
    // Get the current timestamp
    // const timestamp = Date.now();
    // // Extract the file extension from the original filename
    // const fileExtension = originalName.split('.').pop();
    // // Generate a unique filename by combining the timestamp and a random number
    // const uniqueFileName = `${timestamp}-${Math.floor(Math.random() * 10000)}.${fileExtension}`;
    // return uniqueFileName;
    return originalName;
    // return ss;
}
// Handle the file upload
app.post('/upload', upload.array('files'), (req, res) => {
    // Access the uploaded files using req.files
    const files = req.files;

    // Process and save the files as per your requirements
    // For example, you can iterate through the files array and perform actions on each file
    files.forEach(file => {
        // Access file properties: file.originalname, file.mimetype, file.path, etc.
         const originalName = file.originalname;
    const mimeType = file.mimetype;
    const filePath = file.path;

    // Process and save the file as needed
    // For example, you can create a new file name and move the file to a different directory
    const newFileName = generateNewFileName(originalName);
        const newFilePath = path.join('uploads/', newFileName);

        // Use the fs module to move the file to the destination directory
  
        fs.renameSync(filePath, newFilePath);
        // Additional processing logic can be added here based on your requirements
    });

    // Respond with a success message
    res.send('File(s) uploaded successfully!');

});

// Start the server
const port = 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});

