import {createContext, useContext} from "react";
import ImageService from "../../service/imgService";

const Context = createContext<ImageService>(new ImageService());

const {Provider:ImageServiceProvider} = Context

export const useImageServiceContext = () => useContext<ImageService>(Context);

export default ImageServiceProvider;
