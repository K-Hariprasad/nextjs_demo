import UserComp from '../components/User'
const serverData=[
    {id:'u1',userName:'Amritha', nickName:'kunji'},
    {id:'u2',userName:'Subin', nickName:'chim'},
]
function User({userData}) {
    return (
        <UserComp userName={userData.userName} nickName={userData.nickName}/>
    )
}

export default User

export const getStaticPaths = async() =>{
    return {
        paths:[{params:{userid:"u1"}},{params:{userid:"u2"}}],
        fallback:false
    }
}

export const getStaticProps = async({params:{userid}}) =>{
    
    let [userData] = serverData.filter(item=>{
        return item.id === userid
    })
    return {
        props:{userData},
        revalidate:60
    }
}