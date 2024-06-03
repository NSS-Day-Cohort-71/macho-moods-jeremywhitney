// Import database from database.js
import { database } from "./database.js";

// Define function to creat HTML elements for each mood
const createMoodElements = () => {
    const moodContainer = document.querySelector('.mood-container')

    // Iterate over each mood in database
    database.forEach(mood => {
        // Creat mood section
        const moodSection = document.createElement('div')
        moodSection.classList.add('mood')

        //Create mood name element
        const moodName = document.createElement('h2')
        moodName.textContent= mood.name
        moodName.classList.add('mood-name')

        // Create mood image element
        const moodImage = document.createElement('img')
        moodImage.src = mood.imageUrl
        moodImage.alt = mood.name
        moodImage.classList.add('mood-image')

        // Create mood quotes element
        const moodQuotes = document.createElement('div')
        moodQuotes.classList.add('mood-quotes')

        // Create "Macho Advice" label
        const machoAdviceLabel = document.createElement('span')
        machoAdviceLabel.textContent = "Macho Advice:"
        machoAdviceLabel.classList.add('macho-advice')

        // Create quotes container
        const quotesContainer = document.createElement('div')
        quotesContainer.classList.add('quotes-container')
        mood.quotes.forEach(quote => {
            const quoteElement = document.createElement('p')
            quoteElement.textContent = quote
            quotesContainer.appendChild(quoteElement)
        })

        // Append "Macho Advice" label and quotes container to mood quotes element
        moodQuotes.appendChild(machoAdviceLabel)
        moodQuotes.appendChild(quotesContainer)

        // Append elements to mood section
        moodSection.appendChild(moodName)
        moodSection.appendChild(moodImage)
        moodSection.appendChild(moodQuotes)

        // Append mood section to mood container
        moodContainer.appendChild(moodSection)
    })
}

export { createMoodElements }