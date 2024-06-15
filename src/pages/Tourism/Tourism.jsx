import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import PackageCard from '../PackageCard/PackageCard';
import { Link } from 'react-router-dom';
// import video from '../../assets/overview.mp4'
const Tourism = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { user } = useContext(AuthContext);
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/package')
            // console.log(res.data)
            return res.data;

        }

    });
    const { data: guides = [] } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/guide')
            // console.log(res.data)
            return res.data;

        }

    });
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 mt-10'><span className='text-green-400'>Tourism</span> and Travel Guide</h1>
            </div>
            <div className='text-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab><h1 className='lg:text-xl font-bold'>Overview</h1></Tab>
                        <Tab ><h1 className='lg:text-xl  font-bold'>Our Packages</h1></Tab>
                        <Tab ><h1 className='lg:text-xl font-bold'>Meet Our Tour Guide</h1> </Tab>
                    </TabList>

                    <TabPanel>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center  '>
                            <iframe src="https://www.youtube.com/embed/4FrPZoofdBQ?si=O7v-oiIFBfDvplTh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/Z44fFqBQQtg?si=3uGO7pyacdk-O5Fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=8ZimCw4h1h2eMLxr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                            {
                                packages.slice(0, 3).map(item => <PackageCard item={item}></PackageCard>)
                            }
                        </div>
                        <Link to='/allPackages'><button className="btn btn-success mt-5 text-white">All Packages</button></Link>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table text-center mt-5">
                                    {/* head */}
                                    <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Profile Image</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Education</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            guides.map((item, index) =>
                                                // console.log(item);
                                                <tr>

                                                    <th>{index + 1}</th>
                                                    <td><div className="mask mask-squircle w-12 h-12 mx-auto">
                                                        <img src={item.profilePicture} alt="Avatar Tailwind CSS Component" />
                                                    </div></td>
                                                    <td>{item.name} </td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.education}</td>

                                                    <td className="flex gap-2 m-2">

                                                        <button
                                                            // onClick={() => handleDelete(item._id)}
                                                            className="btn text-black mx-auto  ">Details</button>
                                                    </td>
                                                </tr>
                                            )
                                        }


                                    </tbody>


                                </table>
                            </div>
                        </div>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Tourism;