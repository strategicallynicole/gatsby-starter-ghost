/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/06/2021 - 18:04:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/06/2021
 * - Author          :
 * - Modification    :
 **/
 import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { array, oneOf, PropTypes } from 'prop-types'

import * as styles from "./h2.module.scss"

const Title = (props) => {
    const { titletext } = props
    const { bgtext } = props

    return (
        <>
<div className={styles.bgtext}>{bgtext}</div>
  <h2 className={styles.title} data-wow-delay="100ms" data-wow-duration="1000ms">
 {titletext}</h2>
                                   
</>
    )
}

Title.propTypes = {
    titletext: PropTypes.string,
}
Title.defaultProps = {
    titletext: '',

}


export default Title


