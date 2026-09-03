import { useRef, useState } from "react";
import { Animated } from "react-native";

const actionLabels = {
  left: "Not interested",
  right: "Interested",
  top: "Added to wishlist",
};

const useSwipeActions = (items) => {
  const liked = useRef(new Animated.Value(0)).current;
  const disliked = useRef(new Animated.Value(0)).current;
  const wishlist = useRef(new Animated.Value(0)).current;
  const [wishlistItems, setWishlistItems] = useState([]);
  const [interestedItems, setInterestedItems] = useState([]);
  const [disinterestedItems, setDisinterestedItems] = useState([]);
  const [lastAction, setLastAction] = useState("");

  const handleSwipe = (type, cardIndex) => {
    const item = items[cardIndex];
    if (!item) {
      return;
    }

    const actionValue = type === "left" ? disliked : type === "right" ? liked : wishlist;
    const addItem = type === "left" ? setDisinterestedItems : type === "right" ? setInterestedItems : setWishlistItems;

    addItem((currentItems) => [...currentItems, item]);
    setLastAction(actionLabels[type]);

    Animated.timing(actionValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => actionValue.setValue(0));
  };

  return {
    disliked,
    liked,
    wishlist,
    wishlistItems,
    interestedItems,
    disinterestedItems,
    lastAction,
    handleSwipe,
  };
};

export default useSwipeActions;
