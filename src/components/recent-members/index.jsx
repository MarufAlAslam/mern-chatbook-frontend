import React from 'react'

const RecentMembers = ({recentMembers}) => {
    return (
        <div className='recent-members py-10'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-10'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-gray-800'>Recent Members</h2>
                    <p className='text-xl font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <div className='grid md:grid-cols-6 grid-cols-2 gap-8 mt-10'>
                        {
                            recentMembers.map((member) => (
                                <div key={member.id} className='text-center'>
                                    <img className='w-24 h-24 mx-auto rounded-full' src={member.image} alt={member.name}/>
                                    <p className='text-xl font-semibold mt-3'>{member.name}</p>
                                    <p className='text-sm font-light'>{member.online ? 'Online' : 'Offline'}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentMembers