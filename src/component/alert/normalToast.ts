import Swal, { SweetAlertIcon } from "sweetalert2";

interface swalProps {
  icon: SweetAlertIcon;
  title: string;
}

const normalToast = ({ icon, title }: swalProps) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: title,
  });
};

export default normalToast;
