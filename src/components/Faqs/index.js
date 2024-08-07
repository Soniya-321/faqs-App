// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {activeIndex: null}
  onToggleShowText = id => {
    console.log(id)
    this.setState(prevState => ({
      activeIndex: prevState.activeIndex === id ? null : id,
      showText: !prevState.showText,
    }))
  }
  render() {
    const {faqsList} = this.props
    const {activeIndex} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(each => (
              <FaqItem
                faqsList={each}
                key={each.id}
                onToggleShowText={this.onToggleShowText}
                activeIndex={activeIndex}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
