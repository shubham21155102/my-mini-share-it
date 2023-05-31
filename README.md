# Mini Share It

Mini Share It is a lightweight application that allows you to easily transfer files from your phone to your laptop. With this application, you can quickly and securely share files without the need for any external services or complicated setups.

## Features

- Simple and intuitive user interface
- Fast and secure file transfer
- Supports multiple file uploads
- Works seamlessly between your phone and laptop on the same local network
- No need for an internet connection
- Files are transferred directly from your phone to your laptop

## Installation

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Start the server by running `node server.js`.
4. Open the application on your laptop by navigating to `http://localhost:3000` in your web browser.

## Usage

1. Connect your phone and laptop to the same local network (e.g., Wi-Fi network).
2. On your phone, open a web browser and enter the IP address of your laptop followed by port 3000 (e.g., `http://192.168.1.10:3000`).
3. The Mini Share It application will open on your phone's browser.
4. Click on the "Choose Files" button to select the files you want to transfer from your phone.
5. Once you've selected the files, click the "Upload" button.
6. The files will be transferred from your phone to your laptop and saved in the specified location.
7. Once the transfer is complete, you will see a success message on the screen.
8. You can repeat the process to transfer more files if needed.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Node.js](https://nodejs.org/)
