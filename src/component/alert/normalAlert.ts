import Swal, { SweetAlertIcon } from "sweetalert2";

interface swalProps {
  icon: SweetAlertIcon | undefined;
  title: string;
  text: string;
}

const normalAlert = ({ icon, title, text }: swalProps) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
};

export default normalAlert;
