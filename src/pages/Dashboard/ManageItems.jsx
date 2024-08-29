import React from 'react';
import useMenu from '../../hooks/useMenu';

const ManageItems = () => {
    const [menu] = useMenu()
    const handleDelete = (item) => {
        console.log(item)

    }
    const handleUpdate = (item) => {
        console.log(item)

    }
    return (
        <div className='py-12'>
            <div className='flex justify-evenly'>
                <h2 className='text-3xl'>Mange Items</h2>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th className='text-right'>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold">{item?.name}</td>
                                    <td className='text-right font-bold'>
                                        {item?.price}
                                    </td>

                                    <td>
                                        <button
                                            onClick={() => handleUpdate(item)}
                                            className="btn btn-success btn-xs">Update</button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn btn-error btn-xs">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;