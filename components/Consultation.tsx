export default function ConsultationForm() {

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-[#000814]/60 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b99f5a] outline-none"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-[#000814]/60 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b99f5a] outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg bg-[#000814]/60 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b99f5a] outline-none"
        />
      </div>

      <textarea
        placeholder="Brief about your project"
        rows={4}
        className="w-full px-4 py-3 rounded-lg bg-[#000814]/60 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#b99f5a] outline-none resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-[#b99f5a] text-black font-medium rounded-lg shadow-lg hover:bg-[#a88c45] transition duration-300"
      >
        Confirm Booking
      </button>
    </form>
    
  );
}
