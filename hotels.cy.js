///<reference types="cypress"/>

it('visit the website two times one arabic one english', () => {
  let websites = ["https://www.almosafer.com/ar", "https://www.almosafer.com/en"];
  let randomindex = Math.floor(Math.random() * websites.length);
  cy.visit(websites[randomindex]);

  cy.get(".cta__saudi").click();
  cy.get('#uncontrolled-tab-example-tab-hotels').click();

  if (randomindex === 0) {
    let arabicCities = ["دبي", "جدة"];
    let RandomArabic = Math.floor(Math.random() * arabicCities.length);
    
    cy.get('[data-testid="AutoCompleteInput"]').type(arabicCities[RandomArabic]);
    cy.get('[data-testid="AutoCompleteResultsList"]').find("li").eq(1).click();
  } else {
    let englishCities = ["dubai", "jeddah", "riyadh"];
    let RandomEnglish = Math.floor(Math.random() * englishCities.length);
    
    cy.get('[data-testid="AutoCompleteInput"]').type(englishCities[RandomEnglish]);
    cy.get('[data-testid="AutoCompleteResultsList"]').find("li").eq(1).click();
  }

  let random = Math.floor(Math.random() * 2);
  cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(random);
  cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
});