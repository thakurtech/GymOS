import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
        }}
        layers={[
            'grid',
            'markers',
            'axes',
            'areas',
            'crosshair',
            'lines',
            'points',
            'slices',
            'mesh',
            'legends'
        ]}
        defs={[]}
        fill={[{ match: '*', id: 'dots' }]}
        pointSize={8}
        pointColor="#fc9003"
        sliceTooltip={() => null}
        enableCrosshair={false}
        lineWidth={2}
        legends={[]}
        isInteractive={false}
        debugMesh={false}
        enableGridX={true}
        enableGridY={true}
        enablePoints={true}
        pointBorderWidth={1}
        pointBorderColor="#000000"
        enablePointLabel={false}
        crosshairType="cross"
        role="presentation"
        useMesh={true}
        tooltip={() => null}
        enableSlices={false}
        debugSlices={false}
        areaOpacity={0.5}
        areaBlendMode="normal"
        areaBaselineValue={0}
        pointLabel={() => null} // Add this line to provide a value for the pointLabel prop
        colors={{ scheme: 'nivo' }} // Add this line to provide a value for the colors prop
        enableArea={false} // Add this line to provide a value for the enableArea prop
        curve="linear" // Add this line to provide a value for the curve prop
    />
);

export default MyResponsiveLine;