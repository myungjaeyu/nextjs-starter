import styles from '../../static/styles/components/Profile.scss'
import { withTranslation } from '../../i18n'

const Profile = ({ avatar, name, bio, t }) => (
    <article className={ styles.profile }>

        <img src={ avatar } alt='' />

        <h2>{ name }</h2>

        <h5>{ bio }</h5>

        <h5>{ t('test') }</h5>

    </article>
)

export default withTranslation('profile')(Profile)