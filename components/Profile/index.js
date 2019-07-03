import styles from '../../static/styles/components/Profile.scss'

export default ({ avatar, name, bio }) => (
    <article className={ styles.profile }>

        <img src={ avatar } alt='' />

        <h2>{ name }</h2>

        <h5>{ bio }</h5>

    </article>
)