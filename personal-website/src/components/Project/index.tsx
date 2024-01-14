import React, { FunctionComponent } from "react";
import SectionHeading from "../sectionHeading";
import ProjectDisplay from "./project";

const Project: FunctionComponent = () => {
    return (
        <section className="flex flex-col mx-8 my-4 mt-7 bg-dark-bg duration-700 md:w-9/12 md:m-auto">
            <div className="flex my-5 mb-3 lg:mt-0 overflow-hidden bg-dark-bg duration-700 relative py-2">
                <SectionHeading title="Projects" type="left" />
            </div>
            <div>
                <ProjectDisplay
                    title="ShareMySight"
                    description="An application crafted to support individuals with visual impairments by connecting them with volunteers and integrating OpenAI ChatBot for image-to-text communication."
                    imageUrl="ShareMySight.png"
                />
                <ProjectDisplay
                    title="Shoppable"
                    description="With user-friendly navigation, secure transactions, Discover, choose, and redefine your style effortlessly on our premium ecommerce platform for clothing brands."
                    imageUrl="Ecommerce.png"
                />
                <ProjectDisplay
                    title="Online Food Delivery Predictor"
                    description="Apply machine learning models: linear regression, decision tree, random forest, lasso regression and xgboost to predict time taken for food delivery."
                    imageUrl="FoodDelivery.jpg"
                />
                <ProjectDisplay
                    title="SortViz"
                    description="Developed an interactive sorting visualizer application, incorporating 4 sorting algorithms: Bubble Sort, Quick Sort, Heap Sort and Merge Sort"
                    imageUrl="SortViz.png"
                />
            </div>
        </section>
    );
};

export default Project;
