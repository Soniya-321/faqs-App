// Write your code here.
import './index.css'
const FaqItem = props => {
  const {faqsList, onToggleShowText, activeIndex} = props
  const {questionText, id, answerText} = faqsList

  const onClickIcon = () => {
    onToggleShowText(id)
  }
  return (
    <li className="list-container">
      <div className="qsnt-container">
        <h1 className="questionText">{questionText}</h1>
        <img
          src={
            activeIndex === id
              ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
          }
          alt={activeIndex === id ? 'minus' : 'plus'}
          className="icon"
          onClick={onClickIcon}
        />
      </div>
      {activeIndex === id && (
        <>
          <hr className="separator" />
          <p className="answerText">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
