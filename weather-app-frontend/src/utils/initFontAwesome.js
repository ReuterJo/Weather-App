import { library } from "@fortawesome/fontawesome-svg-core";
import { faCity, faLink, faPowerOff, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faCity);
  library.add(faTrash);
}

export default initFontAwesome;
