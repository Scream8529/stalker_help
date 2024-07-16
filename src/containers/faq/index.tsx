import React from 'react'

export default function FaqContainer() {
    return (
        <div className="container">
            <label>
                <div className='item_container'>
                    <input className="faq_checkbox" type='checkbox' defaultChecked={false} />
                    <span className="faq_title">Вопрос</span>
                    <span className='faq_icon' />
                    <div className='faq_answer'>Ответ</div>
                </div>

            </label>

            <label>
                <div className='item_container'>
                    <input className="faq_checkbox" type='checkbox' defaultChecked={false} />
                    <span className="faq_title">Вопрос2</span>
                    <span className='faq_icon' />
                    <div className='faq_answer'>Ответ2</div>
                </div>

            </label>
        </div>
    )
}
