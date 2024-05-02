import Swal, { SweetAlertOptions } from "sweetalert2";
import './swal.css';

export const warning = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Aviso!",
        text: message,
        icon: 'warning',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 3000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const erro = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Error!",
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 3000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const successTicket = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Sucesso!",
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 1350, // 1.35 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const success = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Sucesso!",
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 3000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const logout = () => { //falta arrumar esse
    Swal.fire({
        title: "Deseja realmente sair?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        if (result.isConfirmed) {
        } else if (result.isDenied) {
        }
    });
}

export const cadastradoEmailSenha = () => {
    const options: SweetAlertOptions = {
        title: "E-mail ou senha já existentes!",
        icon: 'question',
        confirmButtonText: 'OK',
        footer: '<a href="/login">Deseja fazer login?</a>',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 3000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const cadastradoCpf = () => {
    const options: SweetAlertOptions = {
        title: "CPF já cadastrado!",
        icon: 'question',
        confirmButtonText: 'OK',
        footer: '<a href="/login">Deseja fazer login?</a>',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 3000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const loginSenhaEmail = () => {
    const options: SweetAlertOptions = {
        title: "Usuário inexistente ou senha incorreta",
        icon: 'question',
        confirmButtonText: 'OK',
        footer: '<a href="/cadastro">Deseja se cadastrar?</a>',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 3000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1250,// 1.25 segundos
    background: `rgba( 240, 240, 240, 1 )`,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  