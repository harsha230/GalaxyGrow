import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    name: "",
    image: "",
    role: "",
    phone: "",
    coordinates: {
      lat: "17.366403",
      lng: "78.5205603",
    },
    locationName: "Hyderabad",
  },
  reducers: {
    userLogin: (state, action) => {
      const { user } = action.payload;

      state.name = user.name;
      state.role = user.role;
      state.image = user.image;
      state.phone = user.phone;
    },
    userLogout: (state) => {
      (state.name = ""), (state.userType = ""), (state.image = "");
    },
    setUserCoordinates: (state, action) => {
      const { lat, lng } = action.payload;
      state.coordinates = {
        lat,
        lng,
      };
    },
    setUserLocationName: (state, action) => {
      const { locationName } = action.payload;
      state.locationName = locationName;
    },
  },
});

export const {
  userLogin,
  userLogout,
  setUserCoordinates,
  setUserLocationName,
} = userSlice.actions;
export default userSlice.reducer;
