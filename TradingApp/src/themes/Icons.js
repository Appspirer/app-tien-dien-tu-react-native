import React from 'react'
import board from '../assets/svgs/board.svg'
import board_focus from '../assets/svgs/board_focus.svg'
import chart from '../assets/svgs/chart.svg'
import chart_focus from '../assets/svgs/chart_focus.svg'
import chat from '../assets/svgs/chat.svg'
import chat_focus from '../assets/svgs/chat_focus.svg'
import mail from '../assets/svgs/mail.svg'
import mail_focus from '../assets/svgs/mail_focus.svg'
import arrow_down from '../assets/svgs/arrow_down.svg'
import arrow_up_green from '../assets/svgs/arrow_up_green.svg'
import arrow_up_right from '../assets/svgs/arrow_up_right.svg'
import more_horizontal from '../assets/svgs/more_horizontal.svg'
import plus from '../assets/svgs/plus.svg'
import chart_content from '../assets/svgs/chart_content.svg'
import arrow_down_red from '../assets/svgs/arrow_down_red.svg'
import chart_green from '../assets/svgs/chart_green.svg'
import chart_red from '../assets/svgs/chart_red.svg'
import ic_price from '../assets/svgs/ic_price.svg'

const SVGs = {
    board,
    board_focus,
    chart,
    chart_focus,
    chat,
    chat_focus,
    mail,
    mail_focus,
    arrow_down,
    arrow_up_green,
    arrow_up_right,
    more_horizontal,
    plus,
    chart_content,
    arrow_down_red,
    chart_green,
    chart_red,
    ic_price
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}