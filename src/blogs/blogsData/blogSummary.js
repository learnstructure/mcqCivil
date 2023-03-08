import Blog1 from './Blog1'
import Blog2 from './Blog2'
const blog = [{
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
    /*
    {
        id: 2,
        title: "What actually are axial force, shear force and bending moment? 🤔",
        preview: "this is my second blog",
        image: '/images/model.JPG',
        content: <Blog1 />
    },
        
        {
            id: 3,
            title: "new blog 3",
            preview: "this is my third blog",
            content: <Blog1 />
        }, */

]
export default blog