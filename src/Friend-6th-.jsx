export default function  Friend({ friend }){

    const {id,name, email, phone, website} = friend;

    return (
        <div className="card-1">
            <h4>Id: {id}</h4>
            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
            <h5>Website: {website}</h5>

        </div>
    )
}












































