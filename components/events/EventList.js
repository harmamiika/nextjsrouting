import styles from './EventList.module.css'
import EventItem from './EventItem'

function EventList(props) {
    const { items } = props;

    return <ul className={styles.list}>
        {items.map(event => <EventItem key={event.id} event={event} />)}
    </ul>
}

export default EventList