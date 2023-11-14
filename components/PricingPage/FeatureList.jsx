import { AiOutlineCheck } from "react-icons/ai";

function FeatureList({ plan }) {
  return (
    <ul className="text-gray-600">
      {plan.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="flex items-start mb-2 text-sm">
          <AiOutlineCheck
            className="w-5 h-5 mr-2"
            style={{ color: feature.color }}
          />
          {feature.text}
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
