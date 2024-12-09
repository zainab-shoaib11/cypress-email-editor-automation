# Cypress Email Editor Automation

The assignment was completed by automating the interaction with a React-based email editor using Cypress. The steps involved are as follows:

### Opening the Email Editor: 

The test begins by visiting the email editor URL (https://react-email-editor-demo.netlify.app/) in the browser.

### Accessing the iFrame: 

Since the email editor is embedded within an iframe, the script accesses the iframe’s content window to interact with the elements inside it.

### Adjusting Text Properties:

- Text Style: The "H2" text style is selected by finding the corresponding button and clicking it.
- Font Size: The font size is increased from 20px to 22px by clicking the "+" button twice.
- Text Alignment: The text alignment is set to left by selecting the appropriate button in the alignment widget.

### Exporting HTML: 

After making the desired changes to the text, the Export HTML button is clicked to test the export functionality of the email editor.

### Waits: 

cy.wait() is used to introduce short delays between actions to ensure elements are properly loaded and interactions are smooth.

This approach simulates a real user interacting with the email editor, adjusting text properties, and verifying the functionality of the HTML export feature.

## Setup Instructions
- Install Visual studio.

### Prerequisites
- Node.js installed
- Cypress installed (`npm install cypress`)

### How to Run the Test
1. Clone this repository:
   ```bash
   git clone https://github.com/zainab-shoaib11/cypress-email-editor-automation.git
