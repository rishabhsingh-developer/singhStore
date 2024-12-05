import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slice/addToCard";
import { remove } from "../redux/slice/addToCard";
import { MdDelete } from "react-icons/md";
export default function Card() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.addtocard.card);
  const subtotal = card.reduce(
    (total, item) => total + item.price * item.quantiy,
    0
  );

  console.log(subtotal);
  return (
    <div className="h-auto">
      <ul className="grid grid-cols-4 text-center">
        <li>item</li>
        <li>Price</li>
        <li>Qunatity</li>

        <li>Remove</li>
      </ul>
      <div>
        {card.map((i) => {
          return (
            <div key={i.id} className="grid grid-cols-4 text-center mt-12 ">
              <div className="flex flex-col  gap-3  items-center">
                <img
                  src={i.image[0].url}
                  alt="img"
                  className="h-[80px] w-[100px]"
                />
                <span>{i.name}</span>
              </div>
              <div className="flex items-center justify-center">
                <span>{i.price / 10}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  className="bg-buttonColor px-4 py-1 text-white"
                  onClick={() => dispatch(decrement(i.id))}
                >
                  -
                </button>
                <span>{i.quantiy}</span>
                <button
                  className="bg-buttonColor px-4 py-1 text-white"
                  onClick={() => dispatch(increment(i.id))}
                >
                  +
                </button>
              </div>

              <div
                className="flex items-center justify-center"
                onClick={() => dispatch(remove(i.id))}
              >
                <MdDelete size={32} />
              </div>
            </div>
          );
        })}
        <p className="text-center mt-[50px] text-lg  px-2">
          Total : {subtotal / 10}Rs
        </p>
      </div>
    </div>
  );
}
