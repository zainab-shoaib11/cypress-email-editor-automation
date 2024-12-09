
describe('Open email editor and adjust font size n other properties', () => {
    it('should adjust font size, change text style, align text, and export HTML', () => {
      cy.visit('https://react-email-editor-demo.netlify.app/'); // Visit the site
  
      cy.window().then((win) => {
        // first iframe on the page
        const iframe = win.document.getElementsByTagName('iframe')[0];
  
        // access the iframe's contentWindow document
        const iframeContent = iframe.contentWindow.document;
  
        // Find and click on the second element
        cy.wrap(iframeContent)
          .find('.blockbuilder-layer-selector') // find all elements within this class
          .eq(2) // for second element
          .click(); // click second element

        cy.wait(2000)
  
        // for "H2" button 
        cy.wrap(iframeContent)
          .find('.segmented-control') // find segmented control 
          .find('.segmented-control-item') // find all items
          .eq(1) // select H2
          .click(); // click H2 button

        cy.wait(2000)
  
        // to increase font size from 20 to 22
        cy.wrap(iframeContent)
          .find('.blockbuilder-font-size-widget')
          .find('.blockbuilder-counter-control-btn.increment') // click + button 
          .eq(0) // select + button
          .click()
          .click(); // click to increase font size

          cy.wait(2000)
  
        // Left button for text alignment
        cy.wrap(iframeContent)
          .find('.blockbuilder-alignment-widget') // find alignment widget
          .find('.segmented-control-item') // find all buttons within segmented control
          .eq(0) // select Left button
          .click(); // click to left-justify

          cy.wait(1000)
      });
  
      // click the Export HTML
      cy.contains('button', 'Export HTML').click(); 
    });
  });
  
  
  