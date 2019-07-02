import styles from '../static/styles/index.scss'

import png from '../static/images/png.png'
import svg from '../static/images/svg.svg'

const Index = () => (
    <div className={ styles.index }>

        <img src={ png } alt='' />
        <img src={ svg } alt='' />

        <p>nextjs-stater</p>
    </div>
)

export default Index