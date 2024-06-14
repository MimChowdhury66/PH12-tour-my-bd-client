import React from 'react';
import blog1 from '../../../public/blog-1.jpg'
import blog2 from '../../../public/blog-2.jpg'
import blog3 from '../../../public/blog-3.jpg'
import blog4 from '../../../public/blog-4.jpg'
import blog5 from '../../../public/blog-5.jpg'
import blog6 from '../../../public/blog-6.jpg'
import blog7 from '../../../public/blog-7.jpg'
const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-xl  font-bold mb-6 mt-10'><span className='text-green-400'>Bangladesh</span> Travel & Tourism Blog</h1>

                <p className='text-center   mb-6'>Looking for something useful to read about travelling in Bangladesh? You’ve come to the right place. Join the league  <br /> of readers who find here detailed insights,  interesting travel tips and ideas and daily inspiration.</p>
            </div>

            {/* blogs section */}
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={blog1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Mahasthangarh</h3>
                            <span className="text-xs dark:text-gray-600">February 19, 2024</span>
                            <p>The history of Mahasthangarh was discussed with Jayant Singh Roy, Assistant Professor, Department of Archeology, Jahangirnagar University. He said, “Mahasthangarh is the oldest capital city of Bangladesh discovered so far Pre-Maurya period, meaning about two and a half thousand years ago, traces of human settlement have been found here. <br />
                                <span className='font-bold'>By- Buzzin' Around</span></p>
                        </div>
                    </a>
                    <div className="grid justify-center  gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog2} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">

                                    National Martyrs' Memorial</h3>
                                <span className="text-xs dark:text-gray-600">April 11, 2024</span>
                                <p>It is the symbol in the memory of the valour and the sacrifice of all those who gave their lives in the Bangladesh Liberation War of 1971, for bringing independence and separated Bangladesh from Pakistan. The monument is located in Savar, about 35 km north-west of the capital, Dhaka. <br />
                                    <span className='font-bold'>By- Buzzin' Around</span></p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog3} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">LALBAGH FORT</h3>
                                <span className="text-xs dark:text-gray-600">February 22, 2024</span>
                                <p>There are numerous statutes throughout the beautifully maintained gardens of Lalbagh Fort. The defensive walls along the eastern portion of the south-west corner have been reinforced with an internal embankment of earth. An underground room with an ornamental half-domed entrance is contained within these defensive walls and it is believed that this may have been used as a summer house. <br />
                                    <span className='font-bold'>By- Buzzin' Around</span></p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog4} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Sonargaon</h3>
                                <span className="text-xs dark:text-gray-600">June 3, 2024</span>
                                <p>Taken together in the Panam city of Thakur Bari Bhaban and Isha Khan's arcade together, the position of the Folk Arts and Crafts Foundation is approximately 16 hectares of space. There are 1 museums, 1 folklore, seminar rooms and crafts villages. The museum has been preserved in around 4,500 people <br /><span className='font-bold'>By- Buzzin' Around</span></p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog5} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Cultural experiences in Cox's Bazar</h3>
                                <span className="text-xs dark:text-gray-600">June 3, 2024</span>
                                <p>Cox’s Bazar is a culturally rich district highlighting traditional music, ethnic communities, culinary delights, and festive celebrations. Alongside these, the region offers a plethora of interesting cultures. Many visitors flock here daily in search of cultural experiences. Let's read the blog and explore the cultural diversity of Cox’s Bazar. <br /><span className='font-bold'>By- Buzzin' Around</span></p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog6} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Ahsan Manzil</h3>
                                <span className="text-xs dark:text-gray-600">June 3, 2024</span>
                                <p>Ahsan Manzil is an attractive tourist spot in Dhaka. It is one of the most meaningful architectural heritage of Bangladesh. It is situated in Old Dhaka on the bank of the river Buriganga. The area is called Kumartuli in Islampur. Here you you’ll enjoy the feeling of the lifestyle of the Nawabs of Dhaka. The pink palace was actually built by Nawab Sir Abdul Gani in 1872, and was reconstructed after the tornado of 1888. Now it has been established as a museum. People have the opportunity to visit the museum and here you will find some historical and archeological things. <br /><span className='font-bold'>By- Buzzin' Around</span></p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog7} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Tea Gardens around Sylhet</h3>
                                <span className="text-xs dark:text-gray-600">June 3, 2024</span>
                                <p>On the north of the Sylhet city, from Pathantula, Sylhet to near Haripur Bazar (Khan Tea Estate), roughly 20 kilometres area – it is mostly covered with green tea gardens and rain forest.



                                    Lakkatura and Malnicherra Tea Gardens located on the Airport road, only about 3.1 kilometres from Zindabazar, Sylhet and Khadimnagar Tea Gardens are approximately 8.5 kilometres.
                                    <br /><span className='font-bold'>By- Buzzin' Around</span></p>
                            </div>
                        </a>



                    </div>

                </div>
            </section>

        </div>
    );
};

export default Blogs;