import User from '../components/User'

const serverData=[
    {id:'u1',userName:'Amritha', nickName:'kunji'},
    {id:'u2',userName:'Subin', nickName:'chim'},
]

function Users({userData}) {
    
    return (
        <>
        <h1>USERS</h1>
        {userData.map((item,key)=>(
            <User userName={item.userName} nickName={item.nickName}/>
        ))}
        </>
    ) 
}

export default Users

export const getStaticProps = async() =>{
    //fetch,
    return {
        props:{userData:serverData},
        revalidate:1
    }
}