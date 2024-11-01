interface TagsProps {
    bubbleColor: string;
    tags: string[];
    deleteTag?: (index: number) => void;
}

const Tags: React.FC<TagsProps> = ({ tags, deleteTag, bubbleColor }) => {
    return (
        <div>
            <div style={{ marginTop: '10px' }}>
                {tags.map((tag, index) => (
                    <span
                        onClick={deleteTag ? () => deleteTag(index) : undefined}
                        key={index}
                        style={{
                            display: 'inline-block',
                            padding: '5px 10px',
                            margin: '5px',
                            backgroundColor: bubbleColor,
                            borderRadius: '15px',
                            cursor: 'pointer',
                            color: '#fff',
                        }}
                    >
                        {tag}
                        {deleteTag && (
                            <span
                                style={{ marginLeft: '5px', cursor: 'pointer' }}
                                onClick={() => deleteTag(index)}
                            >
                                x
                            </span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Tags;