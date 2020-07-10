import React from 'react';
import PartnerTile from './PartnerTile';


function StrategicPartner(){
    return <div>
        <PartnerTile path="source-images/intel-logo.jpg" class="partner-logo"  alt="intel-logo"/>;
        <PartnerTile path="source-images/gigabyte-logo.jpg" class="partner-logo" alt="gigabyte-logo" />
        <PartnerTile path="source-images/nvidia-logo.jpg" class="nvidia partner-logo" alt="nvidia-logo" />
        <PartnerTile path="source-images/seagate-logo.jpg" class="partner-logo" alt="seagate-logo" />
    </div>
}

export default StrategicPartner;