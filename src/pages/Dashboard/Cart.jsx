import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = (id)=> {

    }
    return (
        <div>
            <div className='flex items-center justify-evenly py-5'>
                <h2 className='text-4xl'>Item {cart?.length}</h2>
                <h2 className='text-4xl'>Item {totalPrice}</h2>
                <button className='btn btn-sm btn-primary'>Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr>
                                    <th
                                        key={item?._id}
                                    >
                                        <label>
                                            {index + 1}
                                        </label>
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
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>{item?.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item?._id)}
                                            className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;