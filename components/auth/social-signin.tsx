import Image from "next/image";

const SocialSignIn = () => {
  const providers = [
    {
      name: "Google",
      icon: "/icons/google.svg",
    },
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
    },
    {
      name: "Apple",
      icon: "/icons/apple.svg",
    },
  ];
  return (
    <div className="grid grid-cols-3 py-2 gap-6">
      {providers.map((provider) => {
        return (
          <div
            key={provider.name}
            className="flex flex-col items-center justify-center gap-2 rounded-lg p-6 cursor-pointer bg-light-bg hover:bg-gray-100"
          >
            <Image
              src={provider.icon}
              alt={`${provider.name} icon`}
              width={36}
              height={36}
            />
            <span className="font-normal text-base text-light-text">
              {provider.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SocialSignIn;
