import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  calculateCounts = () => {
    const {inputPhrase} = this.state
    const letterCount = inputPhrase.replace(/[^a-zA-Z]/g, '').length

    // Count vowels and consonants
    const vowels = inputPhrase.match(/[aeiouAEIOU]/g) || []
    const consonants = letterCount - vowels.length

    return {
      letterCount,
      vowelCount: vowels.length,
      consonantCount: consonants,
    }
  }

  render() {
    const {inputPhrase} = this.state
    const {
      letterCount,

      vowelCount,
      consonantCount,
    } = this.calculateCounts()

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">
              Calculate the Letters, Vowels, and Consonants
            </h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                placeholder="Enter the phrase"
                type="text"
                value={inputPhrase}
              />
            </div>
            <div>
              <p className="letters-count">No. of letters: {letterCount}</p>
              <p className="letters-count">No. of vowels: {vowelCount}</p>
              <p className="letters-count">
                No. of consonants: {consonantCount}
              </p>
            </div>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
