import TicketCard from '../components/TicketCard';
import pic from '../assets/images/shin-2.jpg';

const Dashboard = () => {
    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Eubert Almenar',
            avatar: pic, 
            status: 'done',
            priority: 5,
            progress: 40,
            dsecription: 'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
            timestamp: '2022-02-11T0:36:17+0000'   
        }, 
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and Sell AI Model',
            owner: 'Eubert Almenar',
            avatar: pic, 
            status: 'working on it',
            priority: 2,
            progress: 70,
            dsecription: 'Make a video about AI.',
            timestamp: '2022-02-13T0:36:17+0000'   
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Eubert Almenar',
            avatar: pic, 
            status: 'done',
            priority: 3,
            progress: 10,
            dsecription: 'Make a video about building a bot.',
            timestamp: '2022-02-15T0:36:17+0000'   
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter((ticket) => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>      
        </div>
    )
};

export default Dashboard;