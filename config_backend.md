# Notes

Maybe relationship should be queried separately rather than provided in each individual API trace? 

Kinds of relationships
- Hovering over causes related events in lifecycle to show up
- Hovering over shows tooltip with all related events

Kinds of aggregation
- Aggregates attributes on join? - i.e. y axis aggregates both 
    * Aggregation should usually apply for all data i.e. trade, delete, insert
    - Frontend might need DS e.g. hashmap to map e..g client_order_id to the actual
      API object, but also any related objects 
    * For y axis aggregation - you should only be able to apply aggs to the intersection of all attributes, this requires a mapping betweeen data types
    to indicate that which atts e.g. market_code = mic they are equivalent? or alternatively, you can do the joins on the backend.
    * When we calculate the y value for some trace you should look at all the pieces
    of related data. Maybe I think aggs should be in a separate API call as the server
    needs to look at the different API data that is requested e.g .inserts, trades, public_trades, deletes.
    * Also need to support some traces being completely separate e.g. EEIDs should
    an yaxisKey. All data with same yaxis key are plotted together with same aggs
    on the yaxis. 

Kinds of filters
- Filters on y axis of trace

Questions:
* Should joins really be done on the client side via the server side config? or 
should we keep it so that the server does all the joins for now? Except then
we have bugs like one insert is duplicated if it trades multiple times.
* "how to deal with joins?, maybe have an aggregation key for attribute, which
is the same across related attributes