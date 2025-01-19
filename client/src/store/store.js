import { create } from 'zustand';


const useStore = create((set) => ({
  companyData: {
    name: '',
    ico: '',
    address: '',
    contact: '',
    director: '',
  },
  setCompanyData: (data) => set({ companyData: data }),
}));

export default useStore;
