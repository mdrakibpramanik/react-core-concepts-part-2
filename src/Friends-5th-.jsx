import { use } from "react";
import Friend from './Friend-6th-';

export default function Friends({FriendsPromise}){

    const friends = use(FriendsPromise);

    return (
        <div className="card">
            <h3>Friends: {friends.length}</h3>

            {
                friends.map(friend => <Friend key={friend.id} friend ={friend}></Friend>)
            }
        </div>
    )
}










































