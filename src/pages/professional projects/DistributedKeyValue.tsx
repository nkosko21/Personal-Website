import React from "react";

export default function DistributedKeyValue() {
    return(
        <p>
            In this project, I built a distributed, replicated key-value datastore using a simplified version of the Raft consensus protocol. Leveraging this protocol, 
            the system ensures strong consistency guarantees across replicas, supporting essential API calls such as put(key, value) and get(key). 
            This endeavor delves into the intricacies of distributed systems, offering insights into parallel execution and consensus mechanisms for crafting resilient and scalable data management solutions.
        </p>
    );
}