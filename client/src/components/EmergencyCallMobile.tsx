const EmergencyCallMobile = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center md:hidden">
      <div>
        <p className="font-bold text-lg">Emergency Roof Repairs?</p>
        <p>Call us now:</p>
      </div>
      <a href="tel:720-360-8546" className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition-colors underline">
        720-360-8546
      </a>
    </div>
  );
};

export default EmergencyCallMobile;
