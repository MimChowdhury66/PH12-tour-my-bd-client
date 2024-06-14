import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import video from '../../assets/overview.mp4'
const Tourism = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div>
                <h1 className='text-center text-2xl  font-bold mb-6 mt-10'><span className='text-green-400'>Tourism</span> and Travel Guide</h1>
            </div>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab><h1 className='lg:text-xl font-bold'>Overview</h1></Tab>
                        <Tab ><h1 className='lg:text-xl text-green-400 font-bold'>Our Packages</h1></Tab>
                        <Tab ><h1 className='lg:text-xl font-bold'>Meet Our Tour Guide</h1> </Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center border '>
                            <iframe src="https://www.youtube.com/embed/4FrPZoofdBQ?si=O7v-oiIFBfDvplTh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/Z44fFqBQQtg?si=3uGO7pyacdk-O5Fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=8ZimCw4h1h2eMLxr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Tourism;