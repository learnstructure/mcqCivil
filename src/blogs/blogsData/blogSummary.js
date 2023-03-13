import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
import Blog4 from './Blog4'
const blog = [
    {
        id: 4,
        title: "What is pushover analysis and how to perform it in ETABS?",
        preview: "Pushover analysis means application of loads in steps. Loads are applied in steps because the stiffness of the member usually reduces at each step due to formation of cracks or plastic hinges. If the stiffness would not change along the way, this would be same as linear analysis. Pushover analysis helps to see the behavior of structure during earthquake, i.e. how the plasticity develops in it. It is one of the method of performance based design approach.",
        image: '/images/nonlinear/pushover.PNG',
        imageAlt: 'shear force and stress',
        content: <Blog4 />
    }, {
        id: 1,
        title: "Response spectrum analysis in ETABS",
        preview: "According to IS 1893: 2016, if the base shear due to RSA is less than base shear due to equivalent static case, we have to scale up RSA base shear to match the base shear due to static case.",
        image: '/images/model.JPG',
        imageAlt: '3D model of structure',
        content: <Blog1 />,

    },
    {
        id: 2,
        title: "What are actually rigid and semi-rigid diaphragm in ETABS?",
        preview: "Base shear and story shears due to EQ loads are same in each case whether you define rigid or semi-rigid or no diaphragm at all. In case of rigid diaphragm EQ loads are applied at CM of diaphragm whereas in no diaphragm and semi-rigid diaphragm, EQ loads are applied at each internally and externally meshed joint.",
        image: '/images/diaphragm.JPG',
        imageAlt: 'rigid and semi-rigid diaphragm',
        content: <Blog2 />,
    },
    {
        id: 3,
        title: "What actually are axial force, shear force and bending moment? 🤔",
        preview: "To visualize shear force, imagine two planks as shown in figure. The bottom plank is clamped to the ground and top plank is attached on top of bottom plank with the help of glue. Now the top plank is subjected to load P. As a result shear stress τ is developed on interface. When the shear stress τ exceeds strength of glue, then the planks get separated.",
        image: '/images/forces/shear.PNG',
        imageAlt: 'shear force and stress',
        content: <Blog3 />
    },

    /*
   {
       id: 3,
       title: "new blog 3",
       preview: "this is my third blog",
       content: <Blog1 />
   }, */

]
export default blog