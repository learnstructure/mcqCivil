import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
import Blog4 from './Blog4'
import Blog5 from './Blog5'
import Blog6 from './Blog6'
import Blog7 from './Blog7'
import Blog8 from './Blog8'
const blog = [
    {

        title: "What is wind load and how to apply it in ETABS?",
        preview: "Wind load is generally governing lateral load for light building structures because for such structures, wind load demands can be higher than seismic load. Wind load is due to area of the structure. In contrast seismic load is due to weight of the structure.",
        image: '/images/wind/is875.PNG',
        imageAlt: 'diaphragm extent for auto wind load',
        content: <Blog8 />
    },
    {

        title: "What is P-delta analysis and how to perform it?",
        preview: "We still say this elastic because material has not necessarily reached the plastic range. We call this second order because we are considering the deformed shape while writing the equilibrium equation and so we are actually considering the geometric non-linearity.",
        image: '/images/pdelta/bmd.PNG',
        imageAlt: 'p-delta effect',
        content: <Blog7 />
    },
    {

        title: "What is membrane and thin shell in ETABS and which one to assign?",
        preview: "If you assign membrane shell in ETABS, transverse loads applied on the shell will be transferred to the supporting member using tributary area method. This is in contrast to shell thin where load is transferred by finite element analysis, i.e. by meshing of shells.",
        image: '/images/shell/moment.PNG',
        imageAlt: 'moments in shell and membrane',
        content: <Blog6 />
    },
    {

        title: "What is displacement based design approach?",
        preview: "This is part 1 of displacement based design approach. In displacement based design philosophy, the process is opposite to what we saw in force based design. Here the displacement demands are calculated using non-linear analysis and displacement capacities are ensured to allow those deformation demands. Displacement capacities are calculated using methods like capacity spectrum method, displacement coefficient method, etc.",
        image: '/images/nonlinear/acceptance.PNG',
        imageAlt: 'acceptance criteria',
        content: <Blog5 />
    },
    {

        title: "What is pushover analysis and how to perform it in ETABS?",
        preview: "This is part 2 of displacement based design approach. Pushover analysis means application of loads in steps. Loads are applied in steps because the stiffness of the member usually reduces at each step due to formation of cracks or plastic hinges. If the stiffness would not change along the way, this would be same as linear analysis. Pushover analysis helps to see the behavior of structure during earthquake, i.e. how the plasticity develops in it. It is one of the method of performance based design approach.",
        image: '/images/nonlinear/pushover.PNG',
        imageAlt: 'pushover curve',
        content: <Blog4 />
    }, {

        title: "Response spectrum analysis in ETABS",
        preview: "According to IS 1893: 2016, if the base shear due to RSA is less than base shear due to equivalent static case, we have to scale up RSA base shear to match the base shear due to static case.",
        image: '/images/model.JPG',
        imageAlt: '3D model of structure',
        content: <Blog1 />,

    },
    {

        title: "What are actually rigid and semi-rigid diaphragm in ETABS?",
        preview: "Base shear and story shears due to EQ loads are same in each case whether you define rigid or semi-rigid or no diaphragm at all. In case of rigid diaphragm EQ loads are applied at CM of diaphragm whereas in no diaphragm and semi-rigid diaphragm, EQ loads are applied at each internally and externally meshed joint.",
        image: '/images/diaphragm.JPG',
        imageAlt: 'rigid and semi-rigid diaphragm',
        content: <Blog2 />,
    },
    {

        title: "What actually are axial force, shear force and bending moment? 🤔",
        preview: "To visualize shear force, imagine two planks as shown in figure. The bottom plank is clamped to the ground and top plank is attached on top of bottom plank with the help of glue. Now the top plank is subjected to load P. As a result shear stress τ is developed on interface. When the shear stress τ exceeds strength of glue, then the planks get separated.",
        image: '/images/forces/shear.PNG',
        imageAlt: 'shear force and stress',
        content: <Blog3 />
    },

]
export default blog