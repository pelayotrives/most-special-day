import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  surname?: string;
  email: string;
  phone?: string;
  guest: boolean;
  guest_name?: string;
  guest_surname?: string;
  bus: boolean;
  preparty: boolean;
  allergies?: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const isGuest = watch('guest', false);

  const transformData = (data: FormData) => {
    return {
      ...data,
      guest: data.guest ? 'Sí' : 'No',
      bus: data.bus ? 'Sí' : 'No',
      preparty: data.preparty ? 'Sí' : 'No',
      guest_name: data.guest ? data.guest_name || 'CAMPO NO RELLENADO' : 'N/A',
      guest_surname: data.guest ? data.guest_surname || 'CAMPO NO RELLENADO' : 'N/A',
      surname: data.surname || 'CAMPO NO RELLENADO',
      phone: data.phone || 'CAMPO NO RELLENADO',
      allergies: data.allergies || 'CAMPO NO RELLENADO',
    };
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const transformedData = transformData(data);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        transformedData,
        import.meta.env.VITE_USER_ID
      )
      .then((result) => {
        console.log("Correo enviado:", result.text);
        toast.success("¡Correo enviado con éxito!");
        reset(); // Limpia el formulario después de un envío exitoso
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error.text);
        toast.error("¡Hubo un error al enviar el correo!");
      });
  };

  return (
    <section className="bg-[#f7f4ef] py-10 md:py-20 rounded-lg">
      <form
        className="w-11/12 md:w-6/12 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Nombre */}
        <div className="mb-6">
          {errors.name && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.name.message}</p>
          )}
          <input
            autoComplete="off"
            className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
            type="text"
            placeholder="Nombre *"
            {...register("name", { required: "El nombre es requerido" })}
          />
        </div>
        {/* Apellidos */}
        <div className="mb-6">
          {errors.surname && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.surname.message}</p>
          )}
          <input
            autoComplete="off"
            className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
            type="text"
            placeholder="Apellidos"
            {...register("surname")}
          />
        </div>
        {/* Email */}
        <div className="mb-6">
          {errors.email && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.email.message}</p>
          )}
          <input
            autoComplete="off"
            className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
            type="email"
            placeholder="Email *"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato de email inválido",
              },
            })}
          />
        </div>
        {/* Teléfono */}
        <div className="mb-6">
          {errors.phone && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.phone.message}</p>
          )}
          <input
            autoComplete="off"
            className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
            type="tel"
            placeholder="Teléfono"
            {...register("phone")}
          />
        </div>
        {/* Acompañante */}
        <div className="mb-6">
          {errors.guest && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.guest.message}</p>
          )}
          <label className="font-inter font-normal text-lg flex items-center gap-4">
            <input type="checkbox" className="appearance-none bg-white rounded-sm size-4 checked:bg-gold outline outline-transparent checked:outline-gold border border-[#D9D9D9] checked:border-white checked:border-2 focus:outline-gold" {...register("guest")} /> Acompañante
          </label>
        </div>
        {/* Nombre y Apellidos del Acompañante */}
        {isGuest && (
          <>
            <div className="mb-6">
              {errors.guest_name && (
                <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.guest_name.message}</p>
              )}
              <input
                autoComplete="off"
                className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                type="text"
                placeholder="Nombre del acompañante *"
                {...register("guest_name", {
                  required: "El nombre del acompañante es requerido",
                })}
              />
            </div>
            <div className="mb-6">
              {errors.guest_surname && (
                <p className="text-red-500 font-inter font-normal text-lg mb-2">
                  {errors.guest_surname.message}
                </p>
              )}
              <input
                autoComplete="off"
                className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                type="text"
                placeholder="Apellidos del acompañante"
                {...register("guest_surname")}
              />
            </div>
          </>
        )}
        {/* Utilizarás autobús */}
        <div className="mb-6">
          {errors.bus && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.bus.message}</p>
          )}
          <label className="font-inter font-normal text-lg flex items-center gap-4">
            <input type="checkbox" className="appearance-none bg-white rounded-sm size-4 checked:bg-gold outline outline-transparent checked:outline-gold border border-[#D9D9D9] checked:border-white checked:border-2 focus:outline-gold" {...register("bus")} /> Utilizarás autobús
          </label>
        </div>
        {/* Asistencia a la espicha */}
        <div className="mb-6">
          {errors.preparty && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.preparty.message}</p>
          )}
          <label className="font-inter font-normal text-lg flex items-center gap-4">
            <input type="checkbox" className="appearance-none bg-white rounded-sm size-4 checked:bg-gold outline outline-transparent checked:outline-gold border border-[#D9D9D9] checked:border-white checked:border-2 focus:outline-gold" {...register("preparty")} /> Asistencia a la
            espicha
          </label>
        </div>
        {/* Alergias o especialidades */}
        <div className="mb-6">
          {errors.allergies && (
            <p className="text-red-500 font-inter font-normal text-lg mb-2">{errors.allergies.message}</p>
          )}
          <textarea
            className="w-full font-inter font-normal text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9] field-sizing-content"
            placeholder="Alergias o especialidades (máximo 200 caracteres)"
            maxLength={200}
            {...register("allergies")}
          />
        </div>
        {/* Botón de Enviar */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="group flex flex-row items-center gap-3 w-full px-10 py-2.5 rounded-full justify-center special:w-fit transition-all duration-300 ease-in-out cursor-pointer bg-gold hover:shadow-sm"
          >
            <span className="font-inter text-md special:text-lg text-white">
              Enviar
            </span>
          </button>
        </div>
      </form>
    </section>
  ); 
}
